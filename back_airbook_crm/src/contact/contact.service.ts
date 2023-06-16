import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from './entities/contact.entity';
import { AddContactDto } from './dto/add-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {}

  async getContacts(): Promise<ContactEntity[]> {
    return await this.contactRepository.find();
  }
  async addContacts(contact: AddContactDto): Promise<ContactEntity> {
    return await this.contactRepository.save(contact);
  }
  async updateContacts(
    id: string,
    contact: UpdateContactDto,
  ): Promise<ContactEntity> {
    //ici on recupere le contact d'id id et ensuite on replace les anciennes valeurs par celle qui
    //viennent d'etre entré
    const newcontact = await this.contactRepository.preload({
      id,
      ...contact,
    });
    if (!newcontact) {
      throw new NotFoundException(
        "le contact que vous voulais supprimer n'existe pas",
      );
    }
    //ici on va sauvegarder la nouvelle entité
    return await this.contactRepository.save(newcontact);
  }
  async deleteContact(id: string) {
    return await this.contactRepository.delete(id);
  }
}
