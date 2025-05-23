import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Response } from "express";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { AuthGuard } from "src/Auth/AuthGuard.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RoleGuard } from "src/Users/roleGuard.guard";
import { Roles } from "src/decorators/roles.decorators";
import { UserRole } from "src/Users/enum/role.enum";

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async getProductsController(@Query('page') page: number = 1, @Query('limit') limit: number = 5, @Res() res: Response) {
        const products = await this.productsService.getProductsService(page, limit)
        return res.status(200).json(products)
    }

    @Get(':id')
    async getProductByIdController(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
        const product = await this.productsService.getProductByIdService(id)
        return res.status(200).json(product)
    }

    @ApiBearerAuth()
    @Post()
    @UseGuards(AuthGuard)
    async createProductController(@Body() product: CreateProductDto, @Res() res: Response) {
        const newProduct = await this.productsService.createProductService(product)
        return res.status(201).json({ id: newProduct.id })
    }

    @ApiBearerAuth()
    @Put(':id')
    @UseGuards(AuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN)
    async updateProductController(@Body() product: UpdateProductDto, @Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
        const updatedProduct = await this.productsService.updateProductService(id, product)
        return res.status(200).json({ id: updatedProduct.id })
    }

    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProductController(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
        const deleteProduct = await this.productsService.deleteProductService(id)
        return res.status(200).json({ message: `El producto con el id ${deleteProduct.id} ha sido eliminado` })
    }
}
