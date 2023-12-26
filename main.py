from flask import Flask, render_template, request
from api_requests import get_data, obtener_personajes, buscar

app = Flask(__name__)

app.template_folder = "templates"


@app.route("/")
async def home():
    # llamar a la funcion para obtener datos de la api_requests
    try:
        api_data1 = await get_data()

        api_data = await obtener_personajes()
        personajes = api_data.get("data", {}).get('results', [])
        print('data', api_data1.keys())
        return render_template("home.html",
                               api_data=api_data1, personajes=personajes)
    except Exception as e:
        print(f"Error: {e}")
        return render_template("error.html", error_message=str(e))

# debido a que el backend usa una funcion
# async entonces la peticion que se hace
# aqui en el main tambien debe funcionar
# con un asyn await
@app.route("/buscar_personaje")
async def buscar_personaje(): # Cambiar la funcion a async def
    nombre_personaje = request.args.get("buscar_personaje")
    numero_pesonajes = request.args.get("numero_personajes")
    resultado = await buscar(nombre_personaje, numero_pesonajes) # Invocar con await
    print(resultado)
    return render_template("buscar_personaje.html", resultado=resultado)


@app.route("/buscar_comic")
def buscar_comic():
    return render_template("buscar_comic.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
