import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @ApiProperty({
        description: 'The name of the products',
        example: 'Moto g52'
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'The description of the products',
        example: 'A product with good design'
    })
    @IsString()
    description: string

    @ApiProperty({
        description: 'The price of the products',
        example: '777'
    })
    @IsNumber()
    price: number

    @ApiProperty({
        description: 'The stock of the products',
        example: '77'
    })
    @IsNumber()
    stock: number

    @ApiProperty({
        description: 'The image of the products',
        example: 'https://example.com/image.jpg'
    })
    @IsString()
    imgUrl: string

    @IsString()
    category: string
}