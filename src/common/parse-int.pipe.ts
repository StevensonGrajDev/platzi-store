import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata){
    const newValue = parseInt(value)
    if (isNaN(newValue)) {
      throw new BadRequestException(`value[${value}] is NOOOOT a Number`)
    }
    return newValue
  }
}
