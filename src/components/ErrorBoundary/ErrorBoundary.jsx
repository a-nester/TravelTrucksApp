import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state for reserv UI display
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // here might log errors for analytics
    console.error('Error caught by Error Boundary: ', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // here might displayed reserv UI
      return (
        <div className="style boundary">
          <h1>Something went wrong.</h1>
          <p>Try to reload page.</p>
          <button type="button" onClick={this.handleReload}>
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
