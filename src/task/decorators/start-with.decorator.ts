import {
  registerDecorator,
  type ValidationOptions,
  type ValidationArguments,
} from 'class-validator';

export function StartWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      name: 'startWith',
      target: object.constructor,
      propertyName,
      constraints: [prefix],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must start with the prefix "${prefix}"`;
        },
      },
    });
  };
}
