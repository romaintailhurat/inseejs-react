/**
 * Ce module contient les requêtes SPARQL utilisées par l'application.
 * @module queries
 */
// TODO implémenter pour
// http://rdf.insee.fr/graphes/codes/cj
// http://rdf.insee.fr/graphes/codes/pcs2003

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

/**
 * Requête de sélection de toute la NAF, y compris les enfants d'un niveau donné.
 */
export const allNafQuery = `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?code ?label ?uri ( group_concat(?child ; separator=";") as ?children ) WHERE {
    ?uri skos:prefLabel ?label  ;
         skos:notation ?code ;
         skos:inScheme <http://id.insee.fr/codes/nafr2/naf> .
    ?child skos:broader ?uri .
    FILTER langMatches (lang(?label), "fr")
  }
  GROUP BY ?code ?label ?uri
  ORDER BY ?code
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

export const childrenQuery = (uri) => `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?code ?label WHERE {
    <${uri}>  skos:narrower ?child .
    ?child skos:notation ?code ; skos:prefLabel ?label .
    FILTER langMatches (lang(?label), 'fr')
  } ORDER BY ?code
`;

export const conceptsQuery = `
  PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
  SELECT ?concept ?label ?defs ( group_concat(?def ; separator=";") as ?defs ) WHERE {
  	?concept skos:inScheme <http://id.insee.fr/concepts/definitions/scheme> .
          ?concept skos:definition ?def .
          ?concept skos:prefLabel ?label .
  FILTER langMatches (lang(?label), "fr")
  }
  GROUP BY ?concept ?label
`;

/**
 * Build a SPARQL query, adding protocol and host, encoding URL
 * @param {string} query - a SPARQL query
 */
export function createQuery(query) {
  return `${repo}${fragment}${encodeURIComponent(query)}`;
}
