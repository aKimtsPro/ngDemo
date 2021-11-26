import { Byte } from "@angular/compiler/src/util";

export interface VilleDetail{
    id: number;
    nom: string;
    imgType: string;
    imgBytes: Byte[];
}