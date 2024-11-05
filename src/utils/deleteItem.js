export async function deleteItem(id, apiEndpoint, onSuccess) {
    const consent = confirm("Do you really want to delete this item?")
    if (consent) {
        try {
            const request = await fetch(`/api/v1/admin/delete/${apiEndpoint}`, {
                method: "DELETE",
                body: JSON.stringify({ id: id }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const responce = await request.json();

            if (responce?.error) {
                console.log(responce);
                alert(
                    "There is an unknown problem occured. Open console for more information"
                );
            } else {
                onSuccess()
            }
        } catch (r) {
            console.log(r);
            alert("Deletion failed. Try again.");
        }
    }
}