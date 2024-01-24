import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const sanity = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
});
