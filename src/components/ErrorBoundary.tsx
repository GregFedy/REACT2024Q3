import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};
type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError = () => {
    return { hasError: true };
  };

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    console.error('Error caught in ErrorBoundary: ', error, errorInfo);
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
