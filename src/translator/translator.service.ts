import { TranslatorTranslateDto } from './dto/translator-translate.dto';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TranslatorService {
  async translate(
    translatorTranslateDto: TranslatorTranslateDto,
  ): Promise<object> {
    const { from, to, text } = translatorTranslateDto;
    const encodedParams = new URLSearchParams();
    encodedParams.append('source_language', from);
    encodedParams.append('target_language', to);
    encodedParams.append('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b68719f5famsh554b89eb540a6d9p1fe676jsn94c3167b465a',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: encodedParams,
    };

    const result = await axios
      .request(options)
      .then((res) => res.data)
      .then(function (data) {
        console.log(data);
        return data;
      })
      .catch(function (error) {
        console.error(error);
      });
    return result;
  }

  async speech(text: string) {
    const encodedParams = new URLSearchParams();
    encodedParams.append('src', text);
    encodedParams.append('hl', 'en-us');
    encodedParams.append('r', '0');
    encodedParams.append('c', 'mp3');
    encodedParams.append('f', '8khz_8bit_mono');

    console.log({ key: process.env.TRANSLATOR_SPEECH_KEY });

    const options = {
      method: 'POST',
      url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
      params: { key: process.env.TRANSLATOR_SPEECH_KEY },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b68719f5famsh554b89eb540a6d9p1fe676jsn94c3167b465a',
        'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
      },
      data: encodedParams,
    };

    const result = await axios
      .request(options)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });

    return result;
  }
}
