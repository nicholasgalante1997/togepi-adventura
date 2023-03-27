import React from 'react';
import {
  DeckGenPageContainer,
  DeckGenInput,
  DeckGenInputContainer,
  DeckGenButton,
  ChatGPTBannerDisclaimer,
} from './views';
import { PokeBall } from './loading-screen';
import { deckBuilderService, DeckBuilderService } from '../../../services';
import ReactMarkdown from 'react-markdown';

export function DeckGeneratorPageComponent() {
  const [pokemonQuery, setPokemonQuery] = React.useState<string>();
  const [setQuery, setSetQuery] = React.useState<string>();
  const [suggestedDeckText, setSuggestedDeckText] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  async function queryDeckBuilder() {
    try {
      setIsLoading(true);
      console.log(!pokemonQuery || !setQuery);
      if (!pokemonQuery || !setQuery) {
        return;
      }
      const { openAiGeneratedDeck } = await deckBuilderService.query(
        pokemonQuery,
        setQuery
      );
      setSuggestedDeckText(DeckBuilderService.purge(openAiGeneratedDeck));
      return;
    } catch (e: any) {
      console.error((e as Error).message);
    } finally {
        setIsLoading(false);
    }
  }

  function renderLoadingContent(){
    return (
        <div style={{padding: '32px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <PokeBall />
            <div style={{ maxWidth: '300px', textAlign: 'start' }}>
                <h6>
                    Generating your deck. Please don't refresh the page. Deck generation can take up to 1 minute...
                </h6>
            </div>
        </div>
    );
  }

  function reset(){
    setPokemonQuery(undefined);
    setSetQuery(undefined);
    setIsLoading(false);
    setSuggestedDeckText(undefined);
    setIsError(false);
  }

  function renderDeckSuggestion () {
    return (
    <div style={{ marginBottom: '100px', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <ChatGPTBannerDisclaimer>
            <h5>Disclaimer</h5>
            <p>ChatGPT isn't like some genius. It's also not a master Pokemon trainer. There are times when it gets things wrong. Sometimes it makes up a card, this usually happens with Pokemon (as opposed to trainer and energy cards), and it usually happens when it wants an evolution to a V pokemon (VMax or VStar) but that evolution doesn't exist. If it happens, eh just try again.</p>
        </ChatGPTBannerDisclaimer>
        <hr style={{width: '100%'}}/>
        <DeckGenButton>New Search</DeckGenButton>
        <br />
        <h1>Results for {pokemonQuery} from the {setQuery} set</h1>
        <br />
        <ReactMarkdown>
            {suggestedDeckText ?? ''} 
        </ReactMarkdown>
    </div>
    );
  }

  function renderFormContent() {
    return (
      <>
        <div style={{ maxWidth: '70%' }}>
          <h2>OpenAI ChatGPT Powered Deck Builder</h2>
          <p>Have ChatGPT build a deck for you!</p>
          <p>
            Just input a card to focus the deck around and it will generate a
            full standard card deck around that card.
          </p>
        </div>
        <DeckGenInputContainer>
          <label>Card (typically a pokemon)</label>
          <DeckGenInput
            placeholder="'Pikachu V Trainer Gallery'"
            value={pokemonQuery}
            onChange={(e) => setPokemonQuery(e.target.value)}
          />
          <label>Set</label>
          <DeckGenInput
            placeholder="'Lost Origin'"
            value={setQuery}
            onChange={(e) => setSetQuery(e.target.value)}
          />
        </DeckGenInputContainer>
        <div style={{ marginTop: '16px' }}>
          <DeckGenButton onClick={queryDeckBuilder}>Build Deck</DeckGenButton>
        </div>
      </>
    );
  }

  return (
    <DeckGenPageContainer>
        {!suggestedDeckText && !isLoading && renderFormContent()}
        {isLoading && !suggestedDeckText && renderLoadingContent()}
        {suggestedDeckText && !isLoading && renderDeckSuggestion()}
    </DeckGenPageContainer>
  );
}
