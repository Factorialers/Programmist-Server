import { registerEnumType } from '@nestjs/graphql';

export enum WorkScalarFieldEnum {
    id = "id",
    title = "title",
    tags = "tags",
    logoURL = "logoURL",
    readmeURL = "readmeURL",
    licenseURL = "licenseURL",
    sourceCodeURL = "sourceCodeURL",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    publishedAt = "publishedAt",
    isPublish = "isPublish",
    userId = "userId"
}


registerEnumType(WorkScalarFieldEnum, { name: 'WorkScalarFieldEnum', description: undefined })
