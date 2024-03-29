import React from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './IErrorBoundary';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ошибочка...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
