import { useState } from "react";

export default function ArcticSpark() {
  const [form, setForm] = useState({});

  const [result, setResult] = useState({
    pyspark: "",
    spark: "",
  });

  return (
    <main>
      <h2>Apache Iceberg Spark Config Generator</h2>
      <p>
        Fill out the form below and generate the config for spark-shell and
        pyspark for your particular Apache Iceberg Catalog.
      </p>
      <form>
        <label>
          CATALOG
          <select>
            <option>Dremio Arctic</option>
            <option>AWS Glue</option>
            <option>S3/HDFS</option>
            <option>REST Catalog</option>
            <option>Dremio Arctic</option>
          </select>
        </label>
      </form>
      <pre>
        <code></code>
      </pre>
    </main>
  );
}
