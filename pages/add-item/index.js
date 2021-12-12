import { useState, useEffect } from "react";
import Link from 'next/link'
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "libs/firebase";
import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import { Button } from "ui/buttons";
import {
  ContentSection,
  ContentSectionHeader,
  AddNewItemForm,
  UniqueId,
  ItemTextArea,
} from "components/todos";
import { getAdditionalUserInfo } from "@firebase/auth";

function AddItemPage(props) {
  const user = useAuth();
  const [uid, setUid] = useState()
  const [desc, setDesc] = useState('')

  useEffect(() => {
    setUid(uuid().substring(0, 8))

  }, [user])

  async function updateUserData(newToDo) {
    console.log(newToDo);
    if (user) {

      const docPath = `todos/${user.uid}`
      const docRef = await doc(db, docPath)
      const todos = await getDoc(docRef)
      const temp = await updateDoc(docRef, newToDo)
      console.log(todos.data());
    }
  }
  // form submit event handler
  function handleSubmit(e) {
    e.preventDefault()

    updateUserData({
      [`${uid}`]: {
        id: uid,
        desc,
        category: "Work",
        completed: true
      }
    })
  }
  return (
    <>
      <AppBar />
      <ContentSection>
        <Link href="/todo">
          <a>
            <IoIosArrowRoundBack />
            back
          </a>
        </Link>
        <ContentSectionHeader
          width="2.5rem"
          size="1.75rem"
          title="Add New To Do Item"
          style={{ margin: "1rem 0" }}
        />
        <AddNewItemForm submitHandler={(e) => handleSubmit(e)}>
          <UniqueId uid={uid} />
          <ItemTextArea
            style={{ margin: "1rem 0 1rem" }}
            changeHandler={(e) => setDesc(e.currentTarget.value)}
          />
          <Button type="submit" bgcolor="crimson" color="white">
            Add New To Do Item
          </Button>
        </AddNewItemForm>
      </ContentSection>
    </>
  );
}
export default AddItemPage;
