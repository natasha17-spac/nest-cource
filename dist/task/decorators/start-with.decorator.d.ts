import { type ValidationOptions } from 'class-validator';
export declare function StartWith(prefix: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
