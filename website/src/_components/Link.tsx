export default({
    name,
    url,
    type = ""
  }: {
    name: string;
    url: string;
    type?: string;
  }) => {
    return (
      <a
        class="link"
        href={url}
        type={type}
      >
        {name}
      </a>
    )
}