import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactEntity } from './entities/contact.entity';
import { ContactService } from './contact.service';
import { AddContactDto } from './dto/add-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  async getAllContact(): Promise<ContactEntity[]> {
    return await this.contactService.getContacts();
  }
  @Post()
  async addContact(
    @Body() AddContactDto: AddContactDto,
  ): Promise<ContactEntity> {
    console.log(AddContactDto);

    return await this.contactService.addContacts(AddContactDto);
  }

  @Patch(':id')
  async updateContact(
    @Body() updateContactDto: UpdateContactDto,
    @Param('id') id: string,
  ): Promise<ContactEntity> {
    return await this.contactService.updateContacts(id, updateContactDto);
  }
  @Delete(':id')
  async deleteContact(@Param('id') id: string) {
    return await this.contactService.deleteContact(id);
  }
}
