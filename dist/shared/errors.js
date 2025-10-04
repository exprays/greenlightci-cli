/**
 * Custom error classes for better error handling and reporting
 */
/**
 * Base error class for GreenLightCI errors
 */
export class GreenLightError extends Error {
    constructor(message, code, details) {
        super(message);
        this.code = code;
        this.details = details;
        this.name = 'GreenLightError';
        // Maintains proper stack trace for where error was thrown (if available)
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            details: this.details,
            stack: this.stack,
        };
    }
}
/**
 * Error when GitHub API operations fail
 */
export class GitHubAPIError extends GreenLightError {
    constructor(message, statusCode, details) {
        super(message, 'GITHUB_API_ERROR', { ...details, statusCode });
        this.statusCode = statusCode;
        this.name = 'GitHubAPIError';
    }
}
/**
 * Error when parsing diffs fails
 */
export class ParseError extends GreenLightError {
    constructor(message, details) {
        super(message, 'PARSE_ERROR', details);
        this.name = 'ParseError';
    }
}
/**
 * Error when feature detection fails
 */
export class FeatureDetectionError extends GreenLightError {
    constructor(message, featureId, details) {
        super(message, 'FEATURE_DETECTION_ERROR', { ...details, featureId });
        this.featureId = featureId;
        this.name = 'FeatureDetectionError';
    }
}
/**
 * Error when configuration is invalid
 */
export class ConfigurationError extends GreenLightError {
    constructor(message, details) {
        super(message, 'CONFIGURATION_ERROR', details);
        this.name = 'ConfigurationError';
    }
}
/**
 * Error when compatibility checking fails
 */
export class CompatibilityError extends GreenLightError {
    constructor(message, details) {
        super(message, 'COMPATIBILITY_ERROR', details);
        this.name = 'CompatibilityError';
    }
}
/**
 * Error when cache operations fail
 */
export class CacheError extends GreenLightError {
    constructor(message, details) {
        super(message, 'CACHE_ERROR', details);
        this.name = 'CacheError';
    }
}
/**
 * Wrap an error with context
 */
export function wrapError(error, message, code = 'UNKNOWN_ERROR', details) {
    if (error instanceof GreenLightError) {
        return error;
    }
    if (error instanceof Error) {
        return new GreenLightError(`${message}: ${error.message}`, code, {
            ...details,
            originalError: error.message,
            originalStack: error.stack,
        });
    }
    return new GreenLightError(`${message}: ${String(error)}`, code, details);
}
/**
 * Check if error is of a specific type
 */
export function isErrorType(error, errorClass) {
    return error instanceof errorClass;
}
/**
 * Format error for logging
 */
export function formatErrorForLog(error) {
    if (error instanceof GreenLightError) {
        const parts = [`[${error.code}] ${error.message}`];
        if (error.details && Object.keys(error.details).length > 0) {
            parts.push(`Details: ${JSON.stringify(error.details, null, 2)}`);
        }
        if (error.stack) {
            parts.push(`Stack: ${error.stack}`);
        }
        return parts.join('\n');
    }
    if (error instanceof Error) {
        return `${error.message}\nStack: ${error.stack}`;
    }
    return String(error);
}
/**
 * Safe error extraction for user display
 */
export function getUserFriendlyError(error) {
    if (error instanceof GitHubAPIError) {
        if (error.statusCode === 404) {
            return 'Could not find the pull request. Please check that the action is triggered by a pull request event.';
        }
        if (error.statusCode === 403) {
            return 'GitHub API rate limit exceeded or insufficient permissions. Please check your github-token.';
        }
        if (error.statusCode === 401) {
            return 'GitHub authentication failed. Please check your github-token.';
        }
        return `GitHub API error: ${error.message}`;
    }
    if (error instanceof ConfigurationError) {
        return `Configuration error: ${error.message}`;
    }
    if (error instanceof ParseError) {
        return `Failed to parse code: ${error.message}`;
    }
    if (error instanceof FeatureDetectionError) {
        return `Feature detection failed: ${error.message}`;
    }
    if (error instanceof CompatibilityError) {
        return `Compatibility check failed: ${error.message}`;
    }
    if (error instanceof GreenLightError) {
        return error.message;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return 'An unknown error occurred';
}
