import React, {Component, ErrorInfo, ReactNode, Suspense} from "react";
import {PageError} from "3-widgets/PageError";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("!!!!!!!!!Uncaught error:", error, errorInfo);
    }

    public render() {
        const {hasError} = this.state
        const {children} = this.props
        if (hasError) {
            return (
                <Suspense fallback={""}>
                    <PageError/>
                </Suspense>
            );
        }

        return children;
    }
}


export default ErrorBoundary;
