import { useEffect, useState, useRef } from 'react'
import styles from './GistComponent.module.scss'
import '@/components/ButtonComponent/ButtonComponent'
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent'
import InputComponent from '@/components/InputComponent/InputComponent'
import GistApiLibrary from '@/libraries/GistApiLibrary'
import UtilityLibrary from '@/libraries/UtilityLibrary'

export default function GistComponent() {
    const [search, setSearch] = useState('')
    const [gists, setGists] = useState([])
    const [forks, setForks] = useState({})
    const [isSearching, setIsSearching] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)
    const formReference = useRef(null)


    async function searchUser(event) {
        event.preventDefault()
        setIsSearching(true)
        const gistUser = await GistApiLibrary.getUsernameGists(search);
        if (gistUser && gistUser.data) {
            setGists(gistUser.data)
        } else {
            setGists([])
        }
        setHasSearched(search)
        setIsSearching(false)
    }
    
    async function showGistForks(gistId) {
        const gistForks = await GistApiLibrary.getGistForks(gistId);
        if (gistForks && gistForks.data) {
            setForks({
                ...forks,
                [gistId]: gistForks.data.slice(0, 3)
            })
        }
    }
    
    async function hideGistForks(gistId) {
        const newForks = {...forks}
        delete newForks[gistId]
        setForks(newForks)
    }

    useEffect(() => {
    }, [gists])

    return (
    <main className={styles.GistComponent}>
        <form ref={formReference} onSubmit={(event)=> searchUser(event)}>
            <InputComponent 
                label="Search by Username"
                type="text"
                value={search} 
                onChange={setSearch}
            ></InputComponent>
            <ButtonComponent 
                className="secondary mini filled black"
                label="Search"
                type="submit" 
                disabled={isSearching || !search}
            ></ButtonComponent>
        </form>
        <div className="ListComponent">
            { hasSearched && gists.length == 0 && (
                <div className="not-found">
                    <div className="icon">🔍</div>
                    <div className="message">We couldn’t find any gists by {hasSearched}</div>
                    <div className="again">Try searching again.</div>
                </div>
            )}
            <ul className="gists">
                { gists.map((gist, gistIndex) => (
                    <li key={gistIndex}>
                        <div className="header">
                            <img src={gist.owner.avatar_url} alt="Owner avatar"></img>

                            <div className="details">
                                <div className="username-filename">
                                    <a href={gist.owner.html_url} target="_blank" className="username">{gist.owner.login}</a>
                                    <span> / </span>
                                    <a href={gist.html_url} target="_blank" className="filename">{Object.values(gist.files)[0].filename}</a>
                                </div>
                                <div className="date">Last active {UtilityLibrary.toHumanDateAndTime(gist.updated_at)}</div>
                            </div>

                            <div className="properties">
                                <div>{Object.entries(gist.files).length} {Object.entries(gist.files).length == 1 ? 'file' : 'files'}</div>
                                <div>{gist.comments} comments</div>
                            </div>
                        </div>
                        <ul className="files">
                            {Object.entries(gist.files).map(([key, file]) => (
                                <li className="file" key={key}>
                                    <a href={file.raw_url}>{file.filename}</a>
                                    <div className="badge">{file.type}</div>
                                </li>
                            ))}
                        </ul>
                        <div className="actions">
                            { !forks[gist.id] && (
                                <ButtonComponent 
                                    className="secondary mini filled black"
                                    label="Show Recent Forks"
                                    type="button" 
                                    onClick={() => showGistForks(gist.id)}
                                ></ButtonComponent>
                            )}
                            { forks[gist.id] && forks[gist.id].length > 0 && (
                                <ButtonComponent 
                                    className="secondary mini filled black"
                                    label="Hide Recent Forks"
                                    type="button" 
                                    onClick={() => hideGistForks(gist.id)}
                                ></ButtonComponent>
                            )}
                            { forks[gist.id] && forks[gist.id].length == 0 && (
                                <ButtonComponent 
                                    className="secondary mini filled black"
                                    label="No Recent Forks"
                                    type="button" 
                                    disabled
                                ></ButtonComponent>
                            )}
                        </div>
                        { forks[gist.id] && forks[gist.id].length > 0 && (
                            <ul className="forks">
                                {forks[gist.id].map((fork, forkIndex) => (
                                    <li key={forkIndex}>
                                        <div>
                                            <a className="header" href={fork.html_url} target="_blank" >
                                                <img src={fork.owner.avatar_url} alt="Owner avatar"></img>
                                                <div className="names">
                                                    <div className="username">{fork.owner.login}</div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </main>
    )
}