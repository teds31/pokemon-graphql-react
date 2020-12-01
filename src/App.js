import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { PokemonContainer } from './containers/PokemonContainer';
function App() {
	const client = new ApolloClient({
		uri: 'https://graphql-pokemon2.vercel.app/',
	});

	return (
		<ApolloProvider client={client}>
			<main>
				<h1>Pokemons</h1>
				<PokemonContainer />
			</main>
		</ApolloProvider>
	);
}

export default App;
