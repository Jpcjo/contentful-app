import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "bafaedtxr8jx",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});
// these lines of code coming from Contentful

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      // this lines of code coming from Contentful

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
        //The curly braces {} denote the creation of a new object.
        // Inside the curly braces, there are property names (title, url, id, and img)
        // without values assigned to them.
        // When you use this syntax without explicit values, JavaScript automatically assigns values to
        // the properties based on variables with matching names in the current scope. This is a
        // shorthand way of creating an object when you have variables with the same names you want
        // to use as property names.
      });

      setLoading(false);
      setProjects(projects);
      //   console.log(projects);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
