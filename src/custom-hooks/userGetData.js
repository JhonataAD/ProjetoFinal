import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore"


const useGetDate = (colletionName) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const collectionRef = collection(db, colletionName)


    useEffect(() => {

        const getDate = async () => {

            // ===== firebase firestore realtime data update ====
           await onSnapshot(collectionRef, (snapshot)=>{               
            setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setLoading(false)
           });
            
        }

        getDate()

    }, [])


    return (
        { data, loading }

    )
}

export default useGetDate;