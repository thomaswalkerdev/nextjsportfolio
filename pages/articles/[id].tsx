import React from "react";
import { useRouter } from "next/router";

function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return <p>ArticleId: {id}</p>;
}

export default ProjectPage;
