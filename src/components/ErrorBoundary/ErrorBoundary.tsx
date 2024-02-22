import React from 'react';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: unknown;
  errorInfo?: unknown;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFormError() {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так, попробуйте позже...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
