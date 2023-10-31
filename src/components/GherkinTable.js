function GherkinTable(){
return(
<div className="App">
    <table>
        <thead>
            <tr>
                <th>English Keyword</th>
                <th>Latvian Equivalent(s)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>feature</td>
                <td>Funkcionala iezime</td>
            </tr>
            <tr>
                <td>background</td>
                <td>Konteksts</td>
            </tr>
            <tr>
                <td>scenario</td>
                <td>Scenārijs</td>
            </tr>
            <tr>
                <td>scenarioOutline</td>
                <td>Scenārijs pēc parauga</td>
            </tr>
            <tr>
                <td>examples</td>
                <td>Piemēri</td>
            </tr>
            <tr>
                <td>given</td>
                <td>Kad</td>
            </tr>
            <tr>
                <td>when</td>
                <td>Ja</td>
            </tr>
            <tr>
                <td>then</td>
                <td>Tad</td>
            </tr>
            <tr>
                <td>and</td>
                <td>Un</td>
            </tr>
            <tr>
                <td>but</td>
                <td>Bet</td>
            </tr>
        </tbody>
    </table>
</div>
)
}

export default GherkinTable;