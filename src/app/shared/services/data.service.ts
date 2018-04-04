import { Injectable } from '@angular/core';
import {Url} from "../models/url";

@Injectable()
export class DataService {
  url: Url[] = [];

  constructor() { }

}
