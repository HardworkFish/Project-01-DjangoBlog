from .models import VisitCount, UserIp


def refresh_visit_count(request):
    count_nums = VisitCount.objects.all()[0]
    count_nums.count += 1
    count_nums.save()


def get_UserIP(request):
    if 'HTTP_X_FORWARDED_FOR' in request.META:
        client_ip = request.META['HTTP_X_FORWARDED_FOR']
        client_ip = client_ip.split(",")[0]
    else:
        client_ip = request.META['REMOTE_ADDR']

    ip_exist = UserIp.objects.filter(ip=str(client_ip))
    if ip_exist:
        uobj = ip_exist[0]
        uobj.count += 1
    else:
        uobj = UserIp()
        uobj.ip = client_ip
        uobj.count = 1
    uobj.save()


