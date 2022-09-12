import { Type, Static } from '../../deps/mod.ts';
import { UtilityScoreCategory } from "../utility-score-category.ts";

export const UtilityScoreDetails = Type.Object({
  readable: UtilityScoreCategory,
  parsability: UtilityScoreCategory,
  scalability: UtilityScoreCategory,
  automatible: UtilityScoreCategory,
  viability: UtilityScoreCategory,
  traceability: UtilityScoreCategory,
  parameterization: UtilityScoreCategory,
  transferability: UtilityScoreCategory,
  executability: UtilityScoreCategory,
  predictability: UtilityScoreCategory,
  relevance: UtilityScoreCategory,
  queryable: UtilityScoreCategory,
  comparability: UtilityScoreCategory,
  clarity: UtilityScoreCategory,
  flexibility: UtilityScoreCategory,
});

export type UtilityScoreDetails = Static<typeof UtilityScoreDetails>;

// Readable - How readable is this by a person (does it have an HTML rendering method)
// Parsability - How easily can this be parsed by a program in a standardized automated fashion (is it formatted in a machine readable source such as JSON)
// Scalability - How easily can this be scaled to yield different amounts of product
// Automatible - How easily can this protocol be run on lab automation equipment
// Viability - How many times has this been successfully executed
// Traceability - How well can someone trace the source of this protocol, it’s history, and any authorship restrictions (copyrights and/or licenses)
// Parameterization - How many of the attributes of this protocol are specified in a way that they can be parsed into individual sets or ranges of parameters for analysis.
// Transferability - How easily can this protocol be transferred from one system to another
// Executability - How much information is provided regarding the requirements (lab space, equipment, etc.) needed to execute the protocol
// Predictability - How much information is provided to be able to predict the amount of time and resources needed to execute a protocol as well as the expected yield.
// Relevance - Is this protocol still relevant or has it been superseded by another protocol
// Queryable - How easily can this protocol be organized in a storage scheme and queried for.
// Comparability - How easily can this protocol be compared to another “similar” protocol
// Clarity - How clear or easy to understand are the instructions in the protocol. This specifically focuses on terminology or phrases that aren’t found in common usage or the domain dictionary.
// Flexibility - How many optional configurations does the protocol provide to support various situations.
