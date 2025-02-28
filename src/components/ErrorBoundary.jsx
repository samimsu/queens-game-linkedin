import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl font-bold text-primary">
            Something went wrong :(
          </h1>

          <div className="mt-6 flex space-x-3">
            <Button
              className="hover:bg-primary hover:opacity-90"
              onClick={() => this.setState({ hasError: false })}
            >
              Try Again
            </Button>
            <a href="/" className="">
              <Button className="hover:bg-primary hover:opacity-90">
                Go home
              </Button>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
