import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';

@Controller('keywords')
export class KeywordsController {
    constructor(private readonly keywordsService: KeywordsService) {
    }

    @Post()
    create(@Body() createKeywordDto: CreateKeywordDto) {
        return this.keywordsService.create(createKeywordDto);
    }

    @Get()
    findAll() {
        return this.keywordsService.findAll();
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: string, @Body() updateKeywordDto: UpdateKeywordDto) {
        return this.keywordsService.update(+id, updateKeywordDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: string) {
        return this.keywordsService.remove(+id);
    }

    @Post('calculate-points')
    calculatePoints(@Body('text') text: string) {
        return this.keywordsService.calculatePoints(text);
    }
}
