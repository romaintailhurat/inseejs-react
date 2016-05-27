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

export const sectionQuery = (code) => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?uri ?label ?code  WHERE {
    GRAPH <http://rdf.insee.fr/graphes/codes/nafr2> {
       ?uri skos:prefLabel ?label ; skos:notation
			 '${code}'	. FILTER langMatches (lang(?label), 'fr')
      } .
     }
`;

export const childrenQuery = (uri) => `PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
SELECT ?code ?label WHERE {
  <${uri}>  skos:narrower ?child .
	?child skos:notation ?code ; skos:prefLabel ?label .
  FILTER langMatches (lang(?label), 'fr') } ORDER BY ?code
  `;

export function createQuery(query) {
  return `${repo}${fragment}${encodeURIComponent(query)}`;
}
