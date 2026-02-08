import { promotext } from "../../lib/text/promoText";
import styles from '../styles/promotext.module.css';

export default function Promotext(){
    return(
        promotext.map((block, index) =>{
            return(
                <div key={`blockItem_${index}`} className={styles.block}>
                    {block.title ? <h2 dangerouslySetInnerHTML={{ __html: block.title }} /> : null}
                    {block.text1 ? <p dangerouslySetInnerHTML={{ __html: block.text1 }} /> : null}
                    {block.list ? 
                        <ul>
                            {block.list.map((list, indx) =>{
                                return(
                                    <li key={`listItem_${indx}`} dangerouslySetInnerHTML={{__html: list.text}} />
                                )
                            })}
                        </ul>
                    :
                        null
                    }
                    {block.text2 ? <p dangerouslySetInnerHTML={{ __html: block.text2 }} /> : null}
                </div>
                    
            )
        })
    )
}