from coapthon.server.coap import CoAP
from coapthon.resources.resource import Resource
from coapthon import defines

class NameGETResource(Resource):
    def __init__(self, name="name", coap_server=None):
        super().__init__(name, coap_server, visible=True,
                                            observable=True, allow_children=True)
        self.payload = "CarName001"

    def render_GET(self, request):
        return self

class LightPUTResource(Resource):
    def __init__(self, name="light", coap_server=None):
        super().__init__(name, coap_server, visible=True,
                                            observable=True, allow_children=True)
        self.status = "off"

    def render_PUT_advanced(self, request,response):
        response.payload = ""
        response.code = defines.Codes.CHANGED.number
        if (request.payload != "errorcase"):
            self.status = request.payload
        else:
            response.code = defines.Codes.BAD_REQUEST.number


        print("*********************", self.status,"*********************")

       
        return self, response

class NameGETResource(Resource):
    def __init__(self, name="name", coap_server=None):
        super().__init__(name, coap_server, visible=True,
                                            observable=True, allow_children=True)
        self.payload = "CarName001"

    def render_GET(self, request):
        return self

class LightPUTResource(Resource):
    def __init__(self, name="light", coap_server=None):
        super().__init__(name, coap_server, visible=True,
                                            observable=True, allow_children=True)
        self.status = "initStatus"

    def render_PUT_advanced(self, request,response):
        response.payload = "THIS IS THE PAYLOAD"
        response.code = defines.Codes.CHANGED.number
        if (request.payload != "errorcase"):
            self.status = request.payload
        else:
            response.code = defines.Codes.BAD_REQUEST.number


        print("*********************", self.status,"*********************")

       
        return self, response

class CoAPServer(CoAP):
    def __init__(self, host, port):
        CoAP.__init__(self, (host, port))
        self.add_resource('name/', NameGETResource())
        self.add_resource('light/', LightPUTResource())

def main():
    server = CoAPServer("0.0.0.0", 5683)
    try:
        print("Server Starting")
        server.listen(10)
    except KeyboardInterrupt:
        print("Server Shutdown")
        server.close()
        print("Exiting...")


if __name__ == '__main__':
    main()