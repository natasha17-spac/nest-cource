"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartWith = StartWith;
const class_validator_1 = require("class-validator");
function StartWith(prefix, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'startWith',
            target: object.constructor,
            propertyName,
            constraints: [prefix],
            options: validationOptions,
            validator: {
                validate(value) {
                    return typeof value === 'string' && value.startsWith(prefix);
                },
                defaultMessage(args) {
                    return `${args.property} must start with the prefix "${prefix}"`;
                },
            },
        });
    };
}
//# sourceMappingURL=start-with.decorator.js.map