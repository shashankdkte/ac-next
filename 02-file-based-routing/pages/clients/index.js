import Link from "next/link";
function ClientPage()
{
  const clients = [
    { id: "ross", name: "Ross Geller" },
    {id:"rachel", name:"Rachel Green"}
  ]
  return <div>
    <h2>ClientPage</h2>
    <ul>
      {clients.map((client) => (<div>
        <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </div>
      ))}
    </ul>
  </div>
}

export default ClientPage; 