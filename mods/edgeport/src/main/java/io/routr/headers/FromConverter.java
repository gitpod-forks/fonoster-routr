package io.routr.headers;

import java.text.ParseException;
import javax.sip.header.HeaderFactory;
import javax.sip.InvalidArgumentException;
import javax.sip.PeerUnavailableException;
import javax.sip.SipFactory;
import gov.nist.javax.sip.header.From;

@ProtoMapping(header = From.class, field = "from", repeatable = false, extension = false)
public class FromConverter implements Converter<From, io.routr.message.From> {
  @Override
  public io.routr.message.From fromHeader(From header) {
    var builder = io.routr.message.From.newBuilder();
    var addressConverter = new AddressConverter();
    if (header.getTag() != null) builder.setTag(header.getTag());
    return builder.setAddress(addressConverter.fromObject(header.getAddress())).build();
  }

  @Override
  public From fromDTO(io.routr.message.From dto) throws InvalidArgumentException, PeerUnavailableException, ParseException {
    var addressConverter = new AddressConverter();
    HeaderFactory factory = SipFactory.getInstance().createHeaderFactory();
    return (From) factory.createFromHeader(addressConverter.fromDTO(dto.getAddress()), dto.getTag());
  }
}
