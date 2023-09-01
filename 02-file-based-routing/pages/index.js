import Link from "next/link";
function HomePages()
{
  return <div>
    <h2>HomePage</h2>
    <ul>
      <li>
        <Link  href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link  href="/clients">Clients</Link>
      </li>
    </ul>
  </div>
}

export default HomePages; 