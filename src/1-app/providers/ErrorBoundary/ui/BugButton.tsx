import React, {useEffect, useState} from "react";
import Button from "6-shared/ui/Button/Button";
import {useTranslation} from "react-i18next";


// Component for testing ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false)
    const {t} = useTranslation('page-error')

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};

