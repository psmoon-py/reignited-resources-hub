
import React, { useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { Calendar, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Mock data for demonstration
const scoreData = [
  { date: "Jul 10", sat: 1200, target: 1400 },
  { date: "Aug 5", sat: 1260, target: 1400 },
  { date: "Aug 25", sat: 1310, target: 1400 },
  { date: "Sep 15", sat: 1370, target: 1400 },
  { date: "Oct 10", sat: 1430, target: 1400 },
];

const sectionScores = [
  { name: "Reading", score: 38, total: 52 },
  { name: "Writing", score: 41, total: 44 },
  { name: "Math - No Calc", score: 17, total: 20 },
  { name: "Math - Calc", score: 34, total: 38 }
];

const scoreConfig = {
  sat: { label: "Your Score", theme: { light: "#2563eb", dark: "#3b82f6" } },
  target: { label: "Target Score", theme: { light: "#f97316", dark: "#fb923c" } }
};

const ScoreTracker: React.FC = () => {
  const [testType, setTestType] = useState<"sat" | "act">("sat");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Score Tracker</h2>
          <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Log New Score</span>
          </Button>
          <Button className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4" />
            <span>Take Practice Test</span>
          </Button>
        </div>
      </div>

      {/* Test Type Selector */}
      <div className="flex justify-center space-x-4">
        <Button 
          variant={testType === "sat" ? "primary" : "outline"}
          onClick={() => setTestType("sat")}
        >
          SAT
        </Button>
        <Button 
          variant={testType === "act" ? "primary" : "outline"}
          onClick={() => setTestType("act")}
        >
          ACT
        </Button>
      </div>

      {/* Score Progress Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Score Progress</h3>
        <div className="h-80">
          <ChartContainer config={scoreConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" />
                <YAxis domain={[1000, 1600]} />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="sat" 
                  stroke="var(--color-sat)" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="var(--color-target)" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </Card>

      {/* Section Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Section Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectionScores}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                  {sectionScores.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.score / entry.total > 0.8 ? "#22c55e" : 
                           entry.score / entry.total > 0.6 ? "#3b82f6" : "#f97316"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Test Details</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Latest Test</span>
              <span className="text-sm text-muted-foreground">Oct 10, 2023</span>
            </div>
            <div className="text-3xl font-bold mb-2">1430</div>
            <div className="text-sm text-green-500 flex items-center">
              <span className="mr-1">+60 points</span>
              <span>(from previous test)</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Evidence-Based Reading</span>
                <span className="font-medium">38/52</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-brand-blue rounded-full" style={{ width: "73%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Writing & Language</span>
                <span className="font-medium">41/44</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "93%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Math (No Calculator)</span>
                <span className="font-medium">17/20</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Math (Calculator)</span>
                <span className="font-medium">34/38</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "89%" }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Suggestions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Personalized Suggestions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">Focus on Reading Comprehension</h4>
            <p className="text-sm text-muted-foreground mb-3">Your reading scores show room for improvement. Consider focusing on passages about science and social studies.</p>
            <Button variant="outline" size="sm" className="w-full">View Reading Resources</Button>
          </div>
          <div className="border border-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">Practice Word Problems</h4>
            <p className="text-sm text-muted-foreground mb-3">Your math section analysis shows that word problems are challenging for you. Focus on translating words to equations.</p>
            <Button variant="outline" size="sm" className="w-full">View Math Resources</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScoreTracker;
