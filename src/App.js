import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { PokemonContainer } from './containers/PokemonContainer';
import './App.css';
function App() {
	const client = new ApolloClient({
		uri: 'https://graphql-pokemon2.vercel.app/',
	});

	return (
		<ApolloProvider client={client}>
			<main>
				<h1 style={{ textAlign: 'center', margin: '2rem 0', color: 'white' }}>
					Pokemon App Using React & GraphQL
				</h1>
				<PokemonContainer />
			</main>
		</ApolloProvider>
	);
}

export default App;
