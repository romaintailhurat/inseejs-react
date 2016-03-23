export const repo = 'http://rdf.insee.fr/sparql';

export const fragment = '?query=';

export const nafQuery = `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?code ?label WHERE {
    GRAPH <http://rdf.insee.fr/graphes/codes/nafr2> {
      ?uri skos:prefLabel ?label ; skos:notation ?code .
      <http://id.insee.fr/codes/nafr2/sections> skos:member ?uri .  FILTER langMatches (lang(?label), "fr")
    } .
  } ORDER BY ?code
`;

export function createQuery(query) {
  return `${repo}${fragment}${encodeURIComponent(query)}`;
}
