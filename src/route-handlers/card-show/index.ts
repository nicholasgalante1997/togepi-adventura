import { Request, Response } from 'express';
import { embed, l } from '../../utils';
import { cardService } from '../../services';
import { CardShowPage, Error404Page, Error500Page } from '../../web/pages';

export async function pokemonCardShowHandler(req: Request, res: Response) {
  const { params } = req;
  const pkId = params.pkId;
  if (!pkId) {
    l('Unknown Pokemon ID; Unavailable on path.', 'error');
    res.send(embed(Error404Page, { bundleName: '404' }));
    return;
  }

  try {
    const axres = await cardService.getCard(pkId);
    res.send(
      embed(CardShowPage, {
        bundleName: 'cardShow',
        props: { card: axres.data },
      })
    );
  } catch (e) {
    l((e as Error).message, 'error');
    res.send(embed(Error500Page, { bundleName: '500' }));
  }
}
