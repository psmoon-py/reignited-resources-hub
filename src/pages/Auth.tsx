
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Info, Lightbulb, XCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [usernameChecking, setUsernameChecking] = useState(false);

  const { login, signup, checkUsernameAvailability } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    if (isLogin) {
      if (!email || !password) {
        toast({
          title: "Please fill in all fields",
          description: "Email/username and password are required",
          variant: "destructive",
        });
        return false;
      }
    } else {
      if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
        toast({
          title: "Please fill in all fields",
          description: "All fields are required for signup",
          variant: "destructive",
        });
        return false;
      }

      if (password !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please make sure your passwords match",
          variant: "destructive",
        });
        return false;
      }

      if (usernameAvailable === false) {
        toast({
          title: "Username not available",
          description: "Please choose a different username",
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      if (isLogin) {
        const success = await login(email, password);
        if (success) {
          toast({
            title: "Welcome back!",
            description: "You've successfully logged in",
          });
          navigate("/");
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email/username or password",
            variant: "destructive",
          });
        }
      } else {
        const success = await signup({
          firstName,
          lastName,
          email,
          username,
          password,
        });
        
        if (success) {
          toast({
            title: "Account created!",
            description: "You've been automatically logged in",
          });
          navigate("/");
        } else {
          toast({
            title: "Signup failed",
            description: "Email or username may already be taken",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUsernameChange = async (value: string) => {
    setUsername(value);
    
    if (value.length < 3) {
      setUsernameAvailable(null);
      return;
    }

    setUsernameChecking(true);
    try {
      const available = await checkUsernameAvailability(value);
      setUsernameAvailable(available);
    } catch (error) {
      setUsernameAvailable(null);
    } finally {
      setUsernameChecking(false);
    }
  };

  return (
    <section className="min-h-screen py-20 flex items-center justify-center bg-muted/20">
      <div className="container px-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-blue" />
                </div>
                <h1 className="text-2xl font-bold">
                  {isLogin ? "Welcome Back" : "Create an Account"}
                </h1>
                <p className="text-foreground/70 mt-2">
                  {isLogin
                    ? "Access all resources and opportunities"
                    : "Join our community of learners"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="username" className="block text-sm font-medium mb-1">
                        Username
                      </label>
                      <div className="relative">
                        <input
                          id="username"
                          type="text"
                          value={username}
                          onChange={(e) => handleUsernameChange(e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                            usernameAvailable === true
                              ? "border-green-500"
                              : usernameAvailable === false
                              ? "border-red-500"
                              : "border-muted"
                          }`}
                          required
                          minLength={3}
                        />
                        {username.length >= 3 && (
                          <div className="absolute right-3 top-2.5">
                            {usernameChecking ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="h-5 w-5 border-2 border-brand-blue border-t-transparent rounded-full"
                              />
                            ) : usernameAvailable === true ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : usernameAvailable === false ? (
                              <XCircle className="h-5 w-5 text-red-500" />
                            ) : null}
                          </div>
                        )}
                      </div>
                      {usernameAvailable === false && (
                        <p className="text-sm text-red-500 mt-1">Username already taken</p>
                      )}
                      {usernameAvailable === true && (
                        <p className="text-sm text-green-500 mt-1">Username available</p>
                      )}
                    </div>
                  </>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {isLogin ? "Email or Username" : "Email Address"}
                  </label>
                  <input
                    id="email"
                    type={isLogin ? "text" : "email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                    minLength={6}
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium mb-1"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      required
                      minLength={6}
                    />
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  isLoading={isSubmitting}
                >
                  {isLogin ? "Log In" : "Sign Up"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/70">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-brand-blue hover:underline focus:outline-none"
                  >
                    {isLogin ? "Sign up" : "Log in"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
