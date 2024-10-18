
import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsOptional, IsString, IsNumber } from "class-validator"
import { CreateProductDto } from "./createProduct.dto"

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({
        description: 'The name of the products',
        example: 'moto g52'
    })
    @IsOptional()
    @IsString()
    name?: string

    @ApiProperty({
        description: 'The description of the products',
        example: 'A product with good design'
    })
    @IsOptional()
    @IsString()
    description?: string

    @ApiProperty({
        description: 'The price of the products',
        example: '777'
    })
    @IsOptional()
    @IsNumber()
    price?: number


    @ApiProperty({
        description: 'The stock of the products',
        example: '77'
    })
    @IsOptional()
    stock?: number

    @ApiProperty({
        description: 'The image of the products',
        example: 'https://example.com/image.jpg'
    })
    @IsOptional()
    @IsString()
    imgUrl?: string

    @IsOptional()
    @IsString()
    category?: string
}