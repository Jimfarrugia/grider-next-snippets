interface SnippetEditPageProps {
  params: {
    id: String;
  };
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
  const id = +props.params.id;

  return <div>Editing snippet with id: {id}</div>;
}
