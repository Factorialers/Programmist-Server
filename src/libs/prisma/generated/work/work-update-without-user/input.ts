import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/string-field-update-operations/input';
import { WorkUpdatetagsInput } from '../work-updatetags/input';
import { WorkUpdatesourceCodeURLInput } from '../work-updatesource-code-url/input';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/date-time-field-update-operations/input';
import { BoolFieldUpdateOperationsInput } from '../../prisma/bool-field-update-operations/input';

@InputType()
export class WorkUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => WorkUpdatetagsInput, {nullable:true})
    tags?: WorkUpdatetagsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    logoURL?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    readmeURL?: StringFieldUpdateOperationsInput;

    @Field(() => WorkUpdatesourceCodeURLInput, {nullable:true})
    sourceCodeURL?: WorkUpdatesourceCodeURLInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPublish?: BoolFieldUpdateOperationsInput;
}
