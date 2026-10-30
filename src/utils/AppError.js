class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(`${resource} not found`, 404);
        this.resource = resource;
    }
}

class ValidationError extends AppError {
    constructor(fields) {
        super('Validation failed', 400);
        this.fields = fields;
    }
}

class UnauthorizedError extends AppError {
    constructor(reason) {
        super('Unauthorized', 401);
        this.reason = reason;
    }
}

class InternalServerError extends AppError {
    constructor(message = 'Internal Server Error') {
        super(message, 500);
    }
}

module.exports = { AppError, NotFoundError, ValidationError, UnauthorizedError, InternalServerError };
