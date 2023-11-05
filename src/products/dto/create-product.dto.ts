import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'The name of a product',
    example: 'Product name',
  })
  readonly name: string;

  @ApiProperty({
    type: String,
    description: 'The description of a product',
    example: 'Product description',
  })
  readonly description?: string;

  @ApiProperty({
    type: Number,
    description: 'The price of a product',
    example: 19.99,
  })
  readonly price: number;

  @ApiProperty({
    type: Number,
    description: 'The stock of a product',
    example: 100,
  })
  readonly stock: number;
}
